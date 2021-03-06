SimpleSchema.messages({
  required: "[label] é de preenchimento obrigatório",
  minString: "[label] precisa ter, no mínimo, [min] letra(s)",
  maxString: "[label] não pode exceder [max] letra(s)",
  minNumber: "[label] não pode ser menor que [min]",
  maxNumber: "[label] não pode ser maior que [max]",
  minDate: "[label] precisa ser em [min] ou posterior",
  maxDate: "[label] precisa ser em [max] ou inferior",
  badDate: "[label] não é uma data válida",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] precisa ser um número inteiro",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] precisa ser um texto comum [String]",
  expectedNumber: "[label] precisa ser um número [Number]",
  expectedBoolean: "[label] precisa ser um valor lógico (Verdadeiro/Falso ou similar) [Boolean]",
  expectedArray: "[label] precisa ser um conjunto de itens [Array]",
  expectedObject: "[label] precisa ser um único item [Object]",
  expectedConstructor: "[label] precisa ser um/uma [type]",
  regEx: [
    {msg: "[label] não passou na validação padrão"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] precisa ser um e-mail válido"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] precisa ser um e-mail válido"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] precisa ser um domínio válido na internet"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] precisa ser um domínio válido na internet"},
    {exp: SimpleSchema.RegEx.IP, msg: "[label] precisa ser um endereço (IPv4 ou IPv6) válido"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "[label] precisa ser um endereço IPv4 válido"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "[label] precisa ser um endereço IPv6 válido"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] precisa ser um link (URL) válido"},
    {exp: SimpleSchema.RegEx.Id, msg: "[label] precisa ser um analfanumérico de identificação válido"}
  ],
  keyNotInSchema: "[key] não foi definida para o contexto do Schema",
  notUnique: "[label]=[value] já foi cadastrado e não pode haver duplicações"
});
