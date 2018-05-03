module.exports = function (callback) {
    if (typeof wx.getUpdateManager === 'function') {
        const updateManager = wx.getUpdateManager()
        console.log('check update');

        updateManager.onCheckForUpdate(function (res) {
            console.log('update: '+res.hasUpdate);
            if (!res.hasUpdate) {
                callback()
            }
        });

        updateManager.onUpdateReady(function () {
            console.log('update finish');
            updateManager.applyUpdate();
        });
        
        updateManager.onUpdateFailed(function () {
            console.log('update failed');
        });
    }
}