export const formatTime = (timestamp) => {
    console.log(timestamp)
    return timestamp
}

export const formatTime2howLong = (timestamp) => {

    if(!!!timestamp) {
        return
    }

    let _today = Math.floor(+new Date() / 1000)
    let _dif = _today - timestamp
    let _txt = []

    if (_dif <= 59) {
        _txt = [_dif, '秒']
    }

    if (_dif >= 60 && _dif < 60 * 60) {
        _txt = [Math.floor(_dif / 60), '分钟']
    }

    if (_dif >= 60 * 60 && _dif < 24 * 60 * 60) {
        _txt = [Math.floor(_dif / (60 * 60)), '小时']
    }

    if (_dif >= 24 * 60 * 60 && _dif < 365 * 24 * 60 * 60) {
        _txt = [Math.floor(_dif / (24 * 60 * 60)), '天']
    }

    if (_dif >= 365 * 24 * 60 * 60) {
        _txt = [Math.floor(_dif / (365 * 24 * 60 * 60)), '天']
    }

    return _txt.join('') + '前'
}

export const DBNum = (str) => {
    let _str = +str
    if (+str < 10) {
        return '0' + str
    } else {
        return str
    }
}

export const $ajax = (obj) => {

    let _obj = Object.assign({}, {
        type: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }, obj)

    return fetch(obj.url, _obj).then((response) => {
        return response.json()
    })
}

export const $ajaxGet = (url, data) => {
    return $ajax({
        url
    })
}
