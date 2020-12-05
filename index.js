// Write your solution in this file!

const driver = {
    name: 'Mary', 
    address: '11 My Street'
};

function updateDriverWithKeyAndValue(obj, key, value ) {
    return Object.assign({}, obj, {[key]: value}, {[key]: value});

}

const newDriver = updateDriverWithKeyAndValue(driver, 'name', 'Sam');

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value; 

    return obj;
}

const updatedDriver = destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '11 Broadway'); 

function deleteFromDriverByKey(obj, key) {
    let newNewDriver = Object.assign({}, driver)
    delete newNewDriver.name 

    return newNewDriver
}

deleteFromDriverByKey(driver, 'name')




function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj.name;
    return obj; 
}

destructivelyDeleteFromDriverByKey(driver, 'name')