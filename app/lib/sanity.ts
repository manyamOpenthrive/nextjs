import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    apiVersion: '2022-03-07',
    dataset: 'production',
    projectId : '9gmkgxkq',
    useCdn: false,
    token: 'sks1eRHdi0opbUnWNsBPDsXKTjqaso3Ltdf8RaJa3UpzPX40qTNitPXD73xriwAULNzOUjeWyroVoMHSLl1dEL2SzKlc6iAsPMFNNjMqi7I9tlXlrMqU6bKf388C231mI2QoYriHS1P80h8pecpzxsKmCflNVECaJ67LEjkjuJmD18V4aavj',
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source)
}