const validateEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  test("verificar correo electrónico válido", () => {
    const validEmail = "correo@ejemplo.com";
    const invalidEmail = "correo_invalido";
  
    expect(validateEmail(validEmail)).toBe(true);
    expect(validateEmail(invalidEmail)).toBe(false);
  });
  