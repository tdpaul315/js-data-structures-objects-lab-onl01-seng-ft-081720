// Creates Object 

const driver = {
    name: 'Mary', 
    address: '11 My Street'
};

// Non-Destructively Updates Object Using (Object.assign)

function updateDriverWithKeyAndValue(obj, key, value ) {
    return Object.assign({}, obj, {[key]: value}, {[key]: value});

}

const newDriver = updateDriverWithKeyAndValue(driver, 'name', 'Sam');

// Destructively Updates Object
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value; 

    return obj;
}

const updatedDriver = destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '11 Broadway');

// Deletes Object Non-Destructively 

function deleteFromDriverByKey(obj, key) {
    let newNewDriver = Object.assign({}, driver)
    delete newNewDriver.name 

    return newNewDriver
}

deleteFromDriverByKey(driver, 'name')


// Deletes Object Destructively 

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj.name;
    return obj; 
}

destructivelyDeleteFromDriverByKey(driver, 'name')