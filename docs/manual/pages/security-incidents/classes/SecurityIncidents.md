[cep-game](../README.md) / [Exports](../modules.md) / SecurityIncidents

# Class: SecurityIncidents

## Hierarchy

- `LitElement`

  ↳ **`SecurityIncidents`**

## Table of contents

### Constructors

- [constructor](SecurityIncidents.md#constructor)

### Properties

- [auswahl](SecurityIncidents.md#auswahl)
- [bild](SecurityIncidents.md#bild)
- [buttons](SecurityIncidents.md#buttons)
- [erklärung1](SecurityIncidents.md#erklärung1)
- [position](SecurityIncidents.md#position)
- [punkte](SecurityIncidents.md#punkte)
- [richtigerButton](SecurityIncidents.md#richtigerbutton)
- [text](SecurityIncidents.md#text)
- [styles](SecurityIncidents.md#styles)

### Methods

- [\_handleClickBild](SecurityIncidents.md#_handleclickbild)
- [\_handleClickButton](SecurityIncidents.md#_handleclickbutton)
- [ladeBild](SecurityIncidents.md#ladebild)
- [ladeButtons](SecurityIncidents.md#ladebuttons)
- [ladeErklärungsDurchlauf](SecurityIncidents.md#ladeerklärungsdurchlauf)
- [render](SecurityIncidents.md#render)
- [schreibeBild](SecurityIncidents.md#schreibebild)
- [schreibeButtons](SecurityIncidents.md#schreibebuttons)

## Constructors

### constructor

• **new SecurityIncidents**()

#### Inherited from

LitElement.constructor

#### Defined in

node_modules/@lit/reactive-element/reactive-element.d.ts:487

## Properties

### auswahl

• **auswahl**: `number` = `-1`

**`state`** - number for the choice of the button

#### Defined in

src/pages/security-incidents/security-incidents.ts:28

___

### bild

• `Private` **bild**: `string` = `""`

#### Defined in

src/pages/security-incidents/security-incidents.ts:12

___

### buttons

• `Private` **buttons**: `String`[] = `[]`

#### Defined in

src/pages/security-incidents/security-incidents.ts:14

___

### erklärung1

• `Private` **erklärung1**: `boolean` = `false`

#### Defined in

src/pages/security-incidents/security-incidents.ts:15

___

### position

• **position**: `number` = `0`

**`state`** - counter for the postion in the game

#### Defined in

src/pages/security-incidents/security-incidents.ts:24

___

### punkte

• `Private` **punkte**: `number` = `0`

#### Defined in

src/pages/security-incidents/security-incidents.ts:17

___

### richtigerButton

• `Private` **richtigerButton**: `number` = `-1`

#### Defined in

src/pages/security-incidents/security-incidents.ts:16

___

### text

• `Private` **text**: `string` = `""`

#### Defined in

src/pages/security-incidents/security-incidents.ts:13

___

### styles

▪ `Static` **styles**: `CSSResult`

#### Overrides

LitElement.styles

#### Defined in

src/pages/security-incidents/security-incidents.ts:19

## Methods

### \_handleClickBild

▸ **_handleClickBild**(): `void`

Is called by the click on the image and counts up the position.

#### Returns

`void`

#### Defined in

src/pages/security-incidents/security-incidents.ts:35

___

### \_handleClickButton

▸ **_handleClickButton**(`e`): `void`

Is called by the click on the buttons and checked if the game is finished, counts up the position and saves Points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Event` | the Event which was klicked |

#### Returns

`void`

#### Defined in

src/pages/security-incidents/security-incidents.ts:47

___

### ladeBild

▸ `Private` **ladeBild**(): `void`

Is loading the path to the image out of the JSON.

#### Returns

`void`

#### Defined in

src/pages/security-incidents/security-incidents.ts:90

___

### ladeButtons

▸ `Private` **ladeButtons**(): `void`

Is loading button texts from JSON and stores them in the "buttons" array if the content is not empty.

#### Returns

`void`

#### Defined in

src/pages/security-incidents/security-incidents.ts:102

___

### ladeErklärungsDurchlauf

▸ `Private` **ladeErklärungsDurchlauf**(): `void`

Is loading the Explanation out of the JSON.

#### Returns

`void`

#### Defined in

src/pages/security-incidents/security-incidents.ts:80

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

src/pages/security-incidents/security-incidents.ts:160

___

### schreibeBild

▸ `Private` **schreibeBild**(): `any`

Is writing an image for the content and returns it as HTML.

#### Returns

`any`

#### Defined in

src/pages/security-incidents/security-incidents.ts:115

___

### schreibeButtons

▸ `Private` **schreibeButtons**(): `any`

If buttons are needed, create buttons as html, returns empty html or html with 1,2 or 4 buttons.

#### Returns

`any`

#### Defined in

src/pages/security-incidents/security-incidents.ts:134
