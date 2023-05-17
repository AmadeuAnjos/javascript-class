var video =  Array()

video[1] = Array()
video[1] ['nonme']= 'Bob esponja'
video[1] ['categoria']= 'Cartoon'

function getVideo(video) {

    try {
        console.log(video[0]['nome'])
    } catch (e){
        console.log('Aplicação continua catch')        
    } finally {
        console.log('Aplicação continua')        
    }
}

getVideo(video)
