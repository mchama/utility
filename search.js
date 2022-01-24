const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Function to search voting-codes.json and filter it
const searchCodes = async searchText => {
    const res = await fetch('/data/voting-codes.json');
    const codes = await res.json();

    // Get matches to current text input
    let matches = codes.filter(code => {
        // use ^ if you want to start with the first character, $ at the end to end the exact full word and 'gi' for globally case insensitivity
        const regexFirstName = new RegExp(`^${searchText}$`, 'gi');
        const regexMiddleName1 = new RegExp(`^${searchText}$`, 'gi');
        const regexMiddleName2 = new RegExp(`^${searchText}$`, 'gi');
        const regexLastName = new RegExp(`^${searchText}$`, 'gi');
        const regexCode = new RegExp(`^${searchText}$`, 'gi');
        
        return code.firstName.match(regexFirstName) || code.middleName1.match(regexMiddleName1) || code.middleName2.match(regexMiddleName2) || code.lastName.match(regexLastName) || code.code.match(regexCode);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
}; 

//  Show results in HTML
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `

            <div class="card card-body mb-2 border border-warning">
                <div class="mb-2 fs-5">${match.fullName}</div>
                <br>
                <div class="mb-2 fs-5 text-primary">${match.code}</div>
                
                <div class="row mb-2">
                    <div class="col-sm-12 col-md-4">
                        <div class="fs-6 mb-2">
                            <div>${match.category}</div> 
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div>Sex: ${match.gender}</div> 
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div>Votes: <span class="text-primary">${match.votes}</span></div>
                    </div>
                    
                </div>

                <small>${match.date}</small>
            </div>
        `
        ).join('');

        matchList.innerHTML = html;
    }
};

search.addEventListener("input", () => searchCodes(search.value));
