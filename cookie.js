var date = new Date(new Date().getTime() + 10*3600 * 1000);
document.cookie = "test=true; path=/; expires=" + date.toUTCString();