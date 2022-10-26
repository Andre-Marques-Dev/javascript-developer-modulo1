const precoEtiqueta = 100;
const formaPagmento = 3;

if(formaPagmento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if (formaPagmento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaPagmento === 3) {
    console.log(precoEtiqueta);
}else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}