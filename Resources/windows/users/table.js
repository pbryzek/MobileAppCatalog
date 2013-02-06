Ti.include(
    'loginStatus.js',
    'create.js',
    'login.js',
    'logout.js',
    'remove.js',
    'requestResetPassword.js'
);

windowFunctions['Users'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);
    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u,
        data: createRows([
            'Create User',
            'Login User',
            'Login Status',
            'Logout Current User',
            'Request Reset Password', 
            'Remove Current User'
        ])
    });
    table.addEventListener('click', handleOpenWindow);
    win.add(table);
    win.open();
};