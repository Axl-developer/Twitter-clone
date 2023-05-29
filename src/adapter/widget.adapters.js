
export const tweetsAdapter = (apiResponse) => {
    return apiResponse.map ( widget => ({
        id:widget.id,
        answers:widget.answers,
        nombre:widget.nombre
    }))
}