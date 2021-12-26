const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    //const $form = d.querySelector(form);
    let tester;

    //console.log("1: "+ $form, "2:" + form)

    d.addEventListener("submit",(e)=>{
        if(e.target === $form){
            //console.log(e, e.target, form, $form);
            e.preventDefault();
            tester = window.open($form.direccion.value,"tester",`innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    });

    d.addEventListener("click",(e)=>{
        if(e.target === $form.cerrar){
            tester.close();
        }
    });
    

}