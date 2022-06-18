[cep-game](../README.md) / [Exports](../modules.md) / SecurePassword

# Class: SecurePassword

## Hierarchy

- `LitElement`

  ↳ **`SecurePassword`**

## Table of contents

### Constructors

- [constructor](SecurePassword.md#constructor)

### Properties

- [\_input](SecurePassword.md#_input)
- [\_submitEnabled](SecurePassword.md#_submitenabled)
- [ablaufPosition](SecurePassword.md#ablaufposition)
- [buttonText](SecurePassword.md#buttontext)
- [eingabe](SecurePassword.md#eingabe)
- [erklärung](SecurePassword.md#erklärung)
- [fehlerMeldungPasswort](SecurePassword.md#fehlermeldungpasswort)
- [joulesSource](SecurePassword.md#joulessource)
- [lösung](SecurePassword.md#lösung)
- [position](SecurePassword.md#position)
- [punkte](SecurePassword.md#punkte)
- [richtig](SecurePassword.md#richtig)
- [roboter](SecurePassword.md#roboter)
- [text](SecurePassword.md#text)
- [überschrift](SecurePassword.md#überschrift)
- [styles](SecurePassword.md#styles)

### Methods

- [\_bearbeitePasswortEingabe](SecurePassword.md#_bearbeitepassworteingabe)
- [\_handleClick](SecurePassword.md#_handleclick)
- [\_handleClickAufgabe1](SecurePassword.md#_handleclickaufgabe1)
- [\_inputChanged](SecurePassword.md#_inputchanged)
- [ladeAufgabe2](SecurePassword.md#ladeaufgabe2)
- [readData](SecurePassword.md#readdata)
- [render](SecurePassword.md#render)
- [writeAufgabe](SecurePassword.md#writeaufgabe)
- [writeButtons](SecurePassword.md#writebuttons)
- [writeRoboter](SecurePassword.md#writeroboter)
- [writeText](SecurePassword.md#writetext)

## Constructors

### constructor

• **new SecurePassword**()

#### Inherited from

LitElement.constructor

#### Defined in

node_modules/@lit/reactive-element/reactive-element.d.ts:487

## Properties

### \_input

• **\_input**: `HTMLInputElement`

#### Defined in

[src/pages/secure-password/secure-password.ts:37](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L37)

___

### \_submitEnabled

• **\_submitEnabled**: `boolean` = `false`

#### Defined in

[src/pages/secure-password/secure-password.ts:34](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L34)

___

### ablaufPosition

• `Private` **ablaufPosition**: `Ablauf` = `Ablauf.Einfuehrung`

#### Defined in

[src/pages/secure-password/secure-password.ts:17](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L17)

___

### buttonText

• `Private` **buttonText**: `string` = `""`

#### Defined in

[src/pages/secure-password/secure-password.ts:15](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L15)

___

### eingabe

• `Private` **eingabe**: `string` = `""`

#### Defined in

[src/pages/secure-password/secure-password.ts:21](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L21)

___

### erklärung

• **erklärung**: `boolean` = `false`

#### Defined in

[src/pages/secure-password/secure-password.ts:31](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L31)

___

### fehlerMeldungPasswort

• `Private` **fehlerMeldungPasswort**: `string` = `''`

#### Defined in

[src/pages/secure-password/secure-password.ts:20](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L20)

___

### joulesSource

• `Private` **joulesSource**: `string` = `""`

#### Defined in

[src/pages/secure-password/secure-password.ts:13](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L13)

___

### lösung

• `Private` **lösung**: `string` = `""`

#### Defined in

[src/pages/secure-password/secure-password.ts:18](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L18)

___

### position

• **position**: `number` = `0`

#### Defined in

[src/pages/secure-password/secure-password.ts:25](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L25)

___

### punkte

• `Private` **punkte**: `number` = `0`

#### Defined in

[src/pages/secure-password/secure-password.ts:12](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L12)

___

### richtig

• **richtig**: `boolean` = `false`

#### Defined in

[src/pages/secure-password/secure-password.ts:28](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L28)

___

### roboter

• `Private` **roboter**: `boolean` = `false`

#### Defined in

[src/pages/secure-password/secure-password.ts:16](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L16)

___

### text

• `Private` **text**: `string`[] = `[]`

#### Defined in

[src/pages/secure-password/secure-password.ts:14](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L14)

___

### überschrift

• `Private` **überschrift**: `string` = `""`

#### Defined in

[src/pages/secure-password/secure-password.ts:19](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L19)

___

### styles

▪ `Static` **styles**: `CSSResult`

#### Overrides

LitElement.styles

#### Defined in

[src/pages/secure-password/secure-password.ts:10](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L10)

## Methods

### \_bearbeitePasswortEingabe

▸ `Private` **_bearbeitePasswortEingabe**(): `void`

Is called by the button in the last gamemodi, the last gamemode is ablaufPosition==Aublauf.Aufgabe2, and checked if the passwort input is similar with the regex.

#### Returns

`void`

#### Defined in

[src/pages/secure-password/secure-password.ts:84](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L84)

___

### \_handleClick

▸ **_handleClick**(`e`): `void`

Is called by buttons with the text "Weiter", "starten" and "beenden", Here it is checked which button was clicked and either the position is increased, the game ends, or the position is set to 0 and the game flow enum is adjusted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Event` | the Event which was klicked |

#### Returns

`void`

#### Defined in

[src/pages/secure-password/secure-password.ts:44](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L44)

___

### \_handleClickAufgabe1

▸ **_handleClickAufgabe1**(`e`): `void`

Is called by the multiple choice buttons and evaluates whether the clicked button is correct.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Event` | the Event which was klicked |

#### Returns

`void`

#### Defined in

[src/pages/secure-password/secure-password.ts:66](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L66)

___

### \_inputChanged

▸ **_inputChanged**(`e`): `void`

Saves the passwort input, after the press on the button in gamemode: Ablauf.Aufgabe2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `Event` | the input Event |

#### Returns

`void`

#### Defined in

[src/pages/secure-password/secure-password.ts:105](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L105)

___

### ladeAufgabe2

▸ `Private` **ladeAufgabe2**(): `any`

Returns task 2 (ablaufPosition==Aublauf.Aufgabe2) as HTML.

#### Returns

`any`

#### Defined in

[src/pages/secure-password/secure-password.ts:271](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L271)

___

### readData

▸ `Private` **readData**(): `void`

Reads the required data from the JSON file.

#### Returns

`void`

#### Defined in

[src/pages/secure-password/secure-password.ts:113](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L113)

___

### render

▸ **render**(): `TemplateResult`<``1``\>

#### Returns

`TemplateResult`<``1``\>

#### Overrides

LitElement.render

#### Defined in

[src/pages/secure-password/secure-password.ts:296](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L296)

___

### writeAufgabe

▸ `Private` **writeAufgabe**(): `any`

Writes the task as img and returns it as HTML.

#### Returns

`any`

#### Defined in

[src/pages/secure-password/secure-password.ts:258](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L258)

___

### writeButtons

▸ `Private` **writeButtons**(): `any`

Writes the buttons and returns it as HTML.

#### Returns

`any`

#### Defined in

[src/pages/secure-password/secure-password.ts:231](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L231)

___

### writeRoboter

▸ `Private` **writeRoboter**(): `any`

Writes the img of the robot and returns it as HTML.

#### Returns

`any`

#### Defined in

[src/pages/secure-password/secure-password.ts:220](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L220)

___

### writeText

▸ `Private` **writeText**(): `any`

Writes the text into the speech bubble and returns it as HTML.

#### Returns

`any`

#### Defined in

[src/pages/secure-password/secure-password.ts:166](https://github.com/CEP-Gruppe-2/cep-game/blob/9a26290/src/pages/secure-password/secure-password.ts#L166)
