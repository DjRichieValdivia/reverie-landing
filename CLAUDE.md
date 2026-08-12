# Instrucciones para Claude en este proyecto

## Contexto importante

Este repo lo trabajan **dos personas que no programan**, cada una desde su PC,
usando Claude Code. Nadie va a resolver un conflicto de git a mano. El flujo de
git es responsabilidad tuya, no del usuario.

## Reglas de git (obligatorias)

**Antes de tocar cualquier archivo**, sin que te lo pidan:

```
git pull --rebase
```

Si el pull trae cambios, decile al usuario en una línea qué cambió y quién lo
hizo, para que sepa en qué está trabajando el otro.

**Después de cada cambio que funcione**, commiteá y pusheá sin preguntar:

```
git add -A
git commit -m "<mensaje claro en español>"
git push
```

No dejes trabajo sin pushear al terminar una tanda. Si el usuario cierra la
sesión con cambios locales sin subir, el otro no los ve y aparecen conflictos
después.

**Si hay un conflicto de merge:** resolvelo vos. No le muestres marcadores de
conflicto al usuario ni le pidas que elija entre versiones de código. Leé las
dos versiones, quedate con la que preserve el trabajo de ambos, y explicá en
castellano qué hiciste. Si de verdad no se puede conservar todo, decí
explícitamente qué se perdió y de quién era.

**Nunca** uses `git push --force`, `git reset --hard` ni nada que descarte
commits del otro. Si parece la única salida, pará y preguntá.

## Cómo hablarles

- En castellano rioplatense, sin jerga técnica.
- No expliques git salvo que lo pregunten. Hacelo y contá el resultado.
- Cuando termines un cambio visual, corré el sitio y mostrá una captura. Ellos
  evalúan por lo que ven, no leyendo código.

## Organización del código

Una sección de la landing = un archivo en `src/components/`. Así las dos
personas rara vez tocan el mismo archivo y los conflictos casi no aparecen.

```
src/components/Hero.tsx
src/components/Areas.tsx
src/components/Instalaciones.tsx
src/components/Contacto.tsx
```

Evitá archivos gigantes donde esté todo junto: es la principal causa de
conflictos en este setup.

## Sobre el proyecto

Demo de rediseño para RÊVERIE, clínica de rehabilitación en Pilar. Ver
`README.md` para el brief del cliente y el diagnóstico del sitio actual.

Criterio de diseño: sobrio y cálido, mucho aire, tipografía grande (la audiencia
son familiares de 50+), contacto siempre a mano. Nada de dark mode ni efectos
llamativos — el objetivo es transmitir tranquilidad y confianza clínica.
