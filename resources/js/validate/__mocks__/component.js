export default `
<form data-order-form="">
  <fieldset data-validate-container="" class="">
    <div>
<label>Qual será o serviço?</label>
<select required="true" name="Qual" será="" o="" serviço?="">
  <option value="Coloração">Coloração</option><option value="Corte">Corte</option><option value="Escova ">Escova </option><option value="Escova progressiva/definitiva">Escova progressiva/definitiva</option><option value="Luzes">Luzes</option><option value="Manicure">Manicure</option><option value="Pedicure">Pedicure</option><option value="Penteado">Penteado</option>
</select>
<span data-warning-message></span>
</div><div>
<label>Para quem será o serviço?</label>
<select required="false" name="Para" quem="" será="" o="" serviço?="">
  <option value="Criança">Criança</option><option value="Homem">Homem</option><option value="Mulher">Mulher</option>
</select>
<span data-warning-message></span>
</div><div>
<label>O serviço será para quantas pessoas?</label>
<select required="false" name="O" serviço="" será="" para="" quantas="" pessoas?="">
  <option value="1">1</option><option value="2">2</option><option value="Mais de 3">Mais de 3</option>
</select>
<span data-warning-message></span>
</div><div>
<label>Para quando você precisa deste serviço?</label>
<select required="true" name="Para" quando="" você="" precisa="" deste="" serviço?="">
  <option value="Hoje ou nos próximos dias">Hoje ou nos próximos dias</option><option value="Nos próximos 30 dias">Nos próximos 30 dias</option><option value="Nos próximos 3 meses">Nos próximos 3 meses</option><option value="Ainda não tenho previsão">Ainda não tenho previsão</option>
</select>
<span data-warning-message></span>
</div><div>
<label>Informações Adicionais</label>
<textarea placeholder="Descreva" o="" que="" você="" precisa="" name="Informações" adicionais=""></textarea>
</div>
    
  <button data-next='[data-validate-container="next"]' data-submit="">Proximo</button>

  </fieldset>
  <fieldset data-validate-container="next" class="is-hidden">
    <div>
  <label>CEP</label>
  <input type="text" name="cep" required="true" placeholder="">
      <span data-warning-message></span>
</div><div>
  <label>Nome</label>
  <input type="text" name="name" required="true" placeholder="">
    <span data-warning-message></span>
</div><div>
  <label>Email</label>
  <input type="email" name="email" required="true" placeholder="Ex: nome@email.com">
    <span data-warning-message></span>
</div><div>
  <label>Celular</label>
  <input type="text" name="phone" required="true" placeholder="">
    <span data-warning-message></span>
</div>
    
  <button data-submit="">Enviar</button>

  </fieldset></form>`