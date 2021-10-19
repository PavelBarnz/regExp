import Validator from "../script.js";

test.each([
    ['047NameLastname', 'Недопустимое имя пользователя'],
    ['-NameLastname', 'Недопустимое имя пользователя'],
    ['_NameLastname', 'Недопустимое имя пользователя'],
    ['NameLa0458stname', 'Недопустимое имя пользователя'],
    ['NameLa$%^&stname', 'Недопустимое имя пользователя'],
    ['NameLastname004', 'Недопустимое имя пользователя'],
    ['NameLastname_', 'Недопустимое имя пользователя'],
    ['NameLastname-', 'Недопустимое имя пользователя'],
    ['NameLaТЕСТstname', 'Недопустимое имя пользователя'],
])(
    ("Тест функции validateUserName класса Validator"),
    (item, expected) => {
        
        expect(()=>{
            new Validator().validateUserName(item);
        }).toThrowError(expected);
    }
)

test("Тест функции validateUserName класса Validator", ()=>{
    expect(new Validator().validateUserName("NameLastname")).toBe('Принято.');
})