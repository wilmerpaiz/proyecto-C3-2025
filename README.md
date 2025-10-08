# proyecto-C3-2025
## Subtítulo
### Subtítulo de segundo nivel
Repositorio para los ejercicios del curso de proyecto integrador del tercer cuatrimestre del 2025

*Cursivas
**Negrita**
~~Tachado~~

- item 1
- item 2
- item 3

1. Paso 1
2. Paso 2
3. Paso 3

> Cita textual

La función `Math.pow()` permite elevar un valor a una potencia

#### Bloque de código

```
function calcularImc(){
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso/Math.pow(estatura, 2);
    document.getElementById("txtImc").value = imc.toFixed(2);

    let clasificacion = clasificarImc();

    document.getElementById("txtClasificacion").value=clasificacion;
}

```

#### Tablas

| Variable | Descripción | Valor inicial |
|-----------------|----------------|
| peso | Peso de la persona | 0
| estatura | Estatura de la persona | 0 |