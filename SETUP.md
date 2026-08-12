# Cómo empezar (para la segunda persona)

Guía para dejar la compu lista y trabajar en la página con Claude. No hace falta
saber programar. Se hace una sola vez y son unos 20 minutos.

## Antes que nada

Necesitás:

- Una **cuenta de GitHub**. Si no tenés, creala en https://github.com y pasale
  tu nombre de usuario a Richie para que te dé acceso al proyecto.
- Una **suscripción a Claude** (Pro o Max). Claude Code no viene con el plan
  gratuito.

## 1. Instalar Node

Es el motor que hace funcionar la página en tu compu.

Bajalo de https://nodejs.org y elegí la versión **LTS**. Instalador común,
siguiente-siguiente.

## 2. Instalar Git

Es lo que sincroniza el trabajo entre las dos computadoras.

Bajalo de https://git-scm.com/downloads. Dejá todas las opciones por defecto.

## 3. Instalar Claude Code

Abrí **PowerShell** (buscalo en el menú de inicio) y pegá:

```
npm install -g @anthropic-ai/claude-code
```

Cuando termine, escribí `claude` y seguí los pasos para iniciar sesión con tu
cuenta de Claude.

## 4. Bajar el proyecto

En PowerShell:

```
git clone https://github.com/DjRichieValdivia/reverie-landing.git
```

Te va a pedir que inicies sesión en GitHub la primera vez.

Después:

```
cd reverie-landing
npm install
```

## 5. Listo, a trabajar

Cada vez que te sientes a laburar, abrí PowerShell y escribí:

```
cd reverie-landing
claude
```

Y ya le hablás normal: *"cambiá el color del botón de contacto a verde"*,
*"agregá una sección con las obras sociales"*, *"esto en el celular se ve mal,
arreglalo"*.

Claude se encarga solo de bajar los cambios del otro antes de empezar y de
subir los tuyos al terminar.

Para ver la página mientras trabajás, pedile: *"mostrame cómo va quedando"*.

## Las dos únicas reglas

**1. Avisale al otro qué sección vas a tocar.** Un mensaje por WhatsApp
alcanza: *"agarro el hero"*. Si los dos tocan lo mismo al mismo tiempo, se
pisan.

**2. No cierres sin avisar que terminaste.** Decile a Claude *"subí todo"*
antes de irte. Si tu trabajo queda solo en tu compu, el otro no lo ve.

## Si algo se rompe

Escribile a Claude qué pasó, en castellano y sin vueltas: *"me tiró un error al
subir"*, *"la página no abre"*. Copiá y pegá el mensaje de error si hay uno.
Está para resolver eso.
