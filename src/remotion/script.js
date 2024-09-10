// Function to extract data from the article body
function extractData() {
    const items = [];
    
    // Select all items by querying the required elements
    const headers = document.querySelectorAll('#article-body h2');
    const galleries = document.querySelectorAll('.image-expandable, .w-gallery-carousel')
    // const tables = document.querySelectorAll('.table-container table');
    // .image-expandable

    headers.forEach((header, index) => {
        const item = {};
        const itemNum = header.querySelector('.item-num').textContent.trim();
        const name = header.querySelectorAll('span')[1].textContent.trim();
        console.log('name', name, index, galleries, galleries[index])
        // Extract the image source
        const imgSrc = galleries[index].querySelector('img').src;
        console.log('src', imgSrc)
        // Extract data from the corresponding table
        // const cells = tables[index].querySelectorAll('tbody tr td');
        
        // Populate item object
        item.position = itemNum;
        item.name = name;
        // item.class = cells[0].textContent.trim();
        // item.species = cells[1].textContent.trim();
        // item.age = cells[2].textContent.trim();
        // item.voiceActors = cells[3].textContent.trim();
        item.imgSrc = imgSrc;
        item.tip = ''
        items.push(item);
    });

    // Convert items array to JSON and output
    const jsonData = JSON.stringify(items, null, 2);
    console.log(jsonData);
    
    // Optional: download the JSON as a file
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Call the function to extract data
extractData();