/**
 * Created by doctor on 15-6-21.
 */

var names = new List();
names.append("doctor");
names.append("doctor who");

console.log(names.toString());
console.log(names.length());
console.log(names.listSize);
console.log(names.find("who"));
names.remove("doctor");
console.log(names.toString());

function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.append = function(element){
        this.dataStore[this.listSize++] = element;
    };
    this.find = function(element){
        for(var i = 0 ; i < this.dataStore.length; ++i){
            if(this.dataStore[i] == element){
                return i;
            }
        }
        return -1;
    };

    this.remove = function(element){
        var foundAt = this.find(element);
        if(foundAt != -1){
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    };

    this.length = function(){
        return this.listSize;
    };
    this.toString = function(){
        return this.dataStore;
    };

    this.insert = function(element,after){
        var insertPos = this.find(after);
        if(insertPos != -1){
            this.dataStore.splice(insertPos+1,0,element);
            ++this.listSize;
            return true;
        }

        return false;
    };

    this.clear = function(){
        delete  this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
}


