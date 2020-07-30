module.exports = (Franz) => {

    const getMessages = function() {
        let totalUnreadMessages = 0;

        const allPossibleUnreadBadges = document.querySelectorAll(".UnreadBadge");

        allPossibleUnreadBadges.forEach(((value) => {
            //Skip the "Call history"
            try {
                if (value.parentElement?.href?.endsWith("/history")) {
                    return;
                }
            } catch (e) {
                console.error("An exception occured while trying to find the parentElement: ", e);
            }
            totalUnreadMessages += parseInt(value.innerHTML, 10);
        }))

        Franz.setBadge(totalUnreadMessages);
    }

    Franz.loop(getMessages);

};
