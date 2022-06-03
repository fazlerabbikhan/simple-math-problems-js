function oddFriend(friends) {
    if (typeof friends != 'object') {
        return 'Please give an array of names!';
    }
    else {
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length % 2 == 1) {
                var firstOddFriend = friends[i];
                return firstOddFriend;
            }
        }
    }
}

const thatName = oddFriend(['kodu', 'jodu', 'bolod', 'abul', 'kabul']);
console.log(thatName);