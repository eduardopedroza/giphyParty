let gifList = $('#gif-container');
let deleteButton = $('#remove-button');
let input = $('#gif-request');


$('form').on('submit', async function (e) {
    e.preventDefault();

    let searchInput = input.val();
    const gif = await axios.get('http://api.giphy.com/v1/gifs/search', { 
        params: {
            api_key: 'dNLmCr6BnzCoxj9YOxCTHM2s6eMre8r6',
            q : searchInput
        }
    });

    let ranNum = Math.floor(Math.random() * 50);
    const gifURL = gif.data.data[ranNum].images.original.url;
    addGif(gifURL);
    input.val('');
})

function addGif(url) {
    let image = $('<img>', {src: url});
    gifList.append(image);
}

$('#remove-button').on('click', function (e) {
    e.preventDefault();

    gifList.html('');
})

function removeGifs(){

}