

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var mergeTwoLists = function(list1, list2) {
    var current = new ListNode(null);
    var la = current.next;
        if(list1 === null  || list2 === null ){
            return head.next;
        }
        while(list1 !== null  || list2 !== null ) {
            if(list1 !== null && list2 === null){
                la.val = list1.val
                list1 = list1.next
                la.next = new ListNode()
            }
            else if(list2 !== null && list1 === null){
                la.val = list2.val
                list2 = list2.next
                la.next = new ListNode()
            }
            else{
                if(list1.val <= list2.val ){
                    console.log('l <= 2',list1.val <= list2.val)
                    la.val = list1.val
                    list1 = list1.next
                    la.next = new ListNode()
                }else if(list1.val > list2.val){
                    console.log('l > 2',list1.val > list2.val)
                    la.val =list2.val
                    list2 = list2.next
                    la.next = new ListNode()
                }
            }
            la = la.next
            // console.log(la)
        }
        return current;
};
list1 = {val: null, next: null}, list2 = {val: null, next: null};

// list1={ val: 1, next: { val: 2, next: { val: 4, next: null } } }
// list2 ={ val: 1, next: { val: 3, next: { val: 4, next: null } } }
var ma =mergeTwoLists(list1,list2)
while(ma !== null) {
    console.log(ma.val)
    ma = ma.next
}
