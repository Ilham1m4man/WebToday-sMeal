function baseURL() {
    return 'https://www.themealdb.com/api/json/v1/1';
}

class DataSource {
    static randomMeal() {
        return fetch(`${baseURL()}/random.php`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`Please check your internet connection`);
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    static mealCategories() {
        return fetch(`${baseURL()}/list.php?c=list`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`Please check your internet connection`);
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    static searchMealByCategories(category) {
        return fetch(`${baseURL()}/filter.php?c=${category}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`Please check your internet connection`);
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    static searchMealById(ID) {
        return fetch(`${baseURL()}/lookup.php?i=${ID}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`Please check your internet connection`);
            }
        })
        .catch(error => {
            alert(error);
        });
    }
}

export default DataSource;