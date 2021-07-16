import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequest(request, response) {

    if (request.method == 'POST') {
        const TOKEN = '516c4fb88f4414cb6b5fd554d54e7c'
        const client = new SiteClient(TOKEN)

        const registroCriado = await client.items.create({
            itemType: "967135",
            ...request.body,
            // title: "comunidade teste",
            // imageUrl: "https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg",
            // creatorSlug: "gcarniel"
        })

        response.json({
            dados: 'Registro criado',
            registroCriado: registroCriado,
        })
        return
    }

    response.status(404).json({
        message: 'Algo de errado aconteceu'
    })
}