function createUserProfiles(namesArray) {
    let id = 1;
    const userProfiles = namesArray.map((name) => {
        const userProfile = {
            originalName: name,
            modifiedName: name.toUpperCase(),
            id: id++
        };
        return userProfile;
    });
    return userProfiles;
}

const originalArrayString = ['hawa', 'akosua', 'kwasi', 'abena', 'smith', 'akua', 'kwabena'];
const formattedArrayString = ['hawa', 'AKOSUA', 'kwasi', 'ABENA', 'smith', 'AKUA', 'kwabena'];

const userProfiles = createUserProfiles(originalArrayString.concat(formattedArrayString));
console.log(userProfiles);
