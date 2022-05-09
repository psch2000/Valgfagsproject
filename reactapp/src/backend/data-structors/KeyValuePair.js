

export class KeyValuePair{

    #keys = [];
    #values = [];

    hasKey(key){
        return this.#keys.includes(key);
    }

  

    getKeyValues(){
        return [this.#keys, this.#values];
    }

    getKeyLength(){
        return this.#keys.length;
    }

    getValue(key){
        var value = null;
        this.#keys.forEach((k, index) => {
            if (k == key){
                value = this.#values[index];
            }
        });

        return value;
    }

    getValueByIndex(index){
        return this.#values[index];
    }

    setValue(key, value){
        this.#keys.forEach((k, index) => {
            if (k == key){
                this.#values[index] = value;
            }
        });

    }

    addKeyValue(key, value){
        this.#keys.push(key);
        this.#values.push(value);
    }
}