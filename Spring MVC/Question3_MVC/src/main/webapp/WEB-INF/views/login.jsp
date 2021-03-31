<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head><%@ page isELIgnored="false" %></head>
<body>
<h2>Login Page</h2>

<form:errors path="user.*" />
<form action="http://localhost:8083/Question3_MVC/login" method="post">
	<label for="username">UserName:</label><br>
  <input type="text"  name="username"><br>
  <label for="password">Password</label><br>
  <input type="text"  name="password"><br>
  <input type="submit">
</form>
</body>
</html>





 