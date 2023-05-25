export default function ({ redirect, route }) {
  if (process.client) {
    const token = localStorage.getItem("access_token");
    if (!(token && token != null && token !== "") && route.path !== "/login") {
      return redirect('/login');
    }
  }
}
