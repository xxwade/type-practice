export type Includes<T extends unknown[], K> = K extends T[number] ? true : false;

type Test<T extends unknown[]> = T[number]
type T1Demo = 'Kars' extends Test<['Kars', 'Esidisi', 'Wamuu', 'Santana']>? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> //  `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> //  `true`
