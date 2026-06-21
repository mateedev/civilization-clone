# civilization-clone

Clon de simulador de sociedades de intro-software

### Simulacion de Sociedades

Vamos a simular el paso del tiempo en un conjunto de sociedades.

Las sociedades tienen 3 grupos etarios:

- jovenes
- adultos
- ancianos
  Cada año esos grupos etarios cambian, nacen nuevos jovenes, jovenes pasan a adultos, adultos a ancianos, ancianos fallecen.
  Tambien fallecen jovenes y adultos

A su vez dentro de cada sociedad hay eventos que modifican las condiciones de ciertos periodos.

Por ejemplo:

- Una guerra, afecta al pais 1 y al pais 2, por 5 años con una mayor mortalidad de adultos.
- Mejora sanitaria, afecta al pais 3, por 10 años con menor mortalidad en ancianos.
- Baby boom, aumenta la natalidad de en jovenes

## Entidades

sociedad

- id
- nombre

1, Argentina

grupo_etario

- id
- nombre
- sociedad_id
- natalidad_base
- mortalidad_base

1,jovenes,1,0.10,0.05
2,adultos,1,0.15,0.08
3,ancianos,1,0.20,0.15

registros_historicos

-id

- sociedad_id
- grupo_etario_id
- cantidad
- anio

1,1,2000000,2026
1,2,5000000,2026
1,3,3000000,2026
1,1,2500000,2027
1,2,5450000,2027
1,3,3300000,2027

evento

- nombre
- grupo_etario_id
- anio_desde
- anio_hasta
- natalidad
- mortalidad

hambruna,1,2027,2028,0,0.5
