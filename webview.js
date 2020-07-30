module.exports = (Franz) => {

    const getMessages = function() {
        let totalUnreadMessages = 0;

        const allPossibleUnreadBadges = document.querySelectorAll(".UnreadBadge");

        allPossibleUnreadBadges.forEach(((value, key, parent) => {
            //Skip the "Call history"
            if (!value.parentElement?.href?.endsWith("/history")) {
                totalUnreadMessages += parseInt(value.innerHTML, 10);
            }
        }))

        if (totalUnreadMessages > 0) Franz.setBadge(totalUnreadMessages);
    }

    Franz.loop(getMessages);

};
