export default class DataFetscher {
    fetchJsonData(url, dataHandler) {
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then(function (data) {
                console.log("data will be returned:" + data);
                dataHandler(data);

            })
            .catch(function (error) {
                console.log("error:" + error);
            });
    }
}