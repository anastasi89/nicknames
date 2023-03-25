import Validator from '../validator';

test('testing class Validator', () => {
	const result = new Validator('Anastasia');
	expect(result).toEqual({ name: 'Anastasia' });
});

test.each([
	['Anastasia', 'Anastasia', true],
	['anastasia', 'anastasia', true],
	['anasta_siA', 'anastasiA', true],
	['anasta-sia', 'anasta-sia', true],
	['-anastasia', '-anastasia', false],
    ['anastasia-', 'anastasia-', false],
    ['_anastasia', '_anastasia', false],
    ['anastasia_', 'anastasia_', false],
    ['9anastasia', '9anastasia', false],
    ['anastasia9', 'anastasia9', false],
    ['ana-sta9sia', 'ana-sta2sia', true],
	['a6na-stasia', 'a6na-stasia', true],
	['ana12sta-sia', 'ana12sta-sia', true],
    ['anasta-364sia', 'anansta-364sia', true],
    ['ana-sta576_sia', 'ana-sta576_sia', true],
    ['ana67sta-si321a', 'ana67sta-si321a', true],
    ['ana5sta_sia', 'anastasia', true],
	['a68na-sta676sia1', 'a68na-sta676sia1', false],
	['ana98sta-si8785a', 'ana98sta-si8785a', false],
	['a77na-Sta86767sia', 'a77na-Sta86767sia', false],

])('testing class Validator for %s name', (_, name, expected) => {
	const user = new Validator(name);
	const result = user.validateUsername();
	expect(result).toBe(expected);
});
