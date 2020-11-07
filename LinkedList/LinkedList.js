function LinkedList(){
    this.first = null;
    this.push = LinkedListPush;
    this.printable = LinkedListPrint;
    this.pop = LinkedListPop;
    this.length = LinkedListLength;
    this.getElement = getElement;
    this.bool_getElement = bool_getElement;
    this.replace = replace;
}

    function LinkedListPush(value, pos){
        if(!this.first){
            this.first = new Node(value);
            return true;
        }
        current = this.first;
        if(pos == 0){
            this.first = new Node(value);
            this.first.next = current;
            return true;
        }
        previous = this.first;
        current = current.next;
        count = 1;
        while(current){
            if(count == pos){
                previous.next = new Node(value);
                previous.next.next = current;
                return true;
            }
            count ++;
            previous = current;
            current = current.next;
        }
        previous.next = new Node(value);
        return true;
    }

    function LinkedListPop(pos){
        current = this.first;
        if(!current){
            return false;
        }
        if(pos == 0){
            this.first = this.first.next;
            return current.value;
        }
        previous = this.first;
        current = current.next;
        count = 1;
        while(current){
            if(count == pos){
                previous.next = current.next;
                return current.value;
            }
            count ++;
            previous = current;
            current = current.next;
        }
        return false;
    }

    function LinkedListPrint(){
        current = this.first;
        txt = "";
        while(current){
            txt += `${current.value}->`
            current = current.next;
            
        }
        txt += "null";
        return txt;
    }

    function LinkedListLength(){
        count = 0;
        current = this.first;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    function getElement(pos){
        count = 0;
        current = this.first;
        while(current){
            if (pos == count){
                return current.value;
            }
            count ++;
            current = current.next;
        }
        return "null";
    }

    function getIndex(value){
        current = this.first;
        count = 0;
        while(current){
            if(current.value == value){
                return count;
            }
            count ++;
        }
        return count;
    }

    function bool_getElement(value){
        if(!this.first) return false;
        current = this.first;
        while(current){
            if(current.value == value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    function replace(pos, value){
        current = this.first;
        count = 0;
        while(current){
            if(count == pos){
                current.value = value;
                return true;
            }
            count++;
            current = current.next;
            
        }
        return false;
    }