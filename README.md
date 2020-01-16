# Cypress and multiple same cookies

Example of multiple same cookies not working in ´cy.request()`

## Quick start

1. Clone
2. Install dependencies using `$ yarn`
3. Start server running `$ yarn start`
4. Start cypress in a different terminal using `$ yarn run cypress`
5. Run tests.spec.

To monitor cookies, run the developer tools

## What happens

The server has 3 endpoints:

- /test/1 sets a,b,c cookies
- /test/2 deletes a,c cookies and the sets a,b,c cookies to new values
- /test/3 set a,b,c cookies to new values

### Test case 1

In the test "request test/1, then test/2" the cookies a,c are deleted but never set from the following response header:

```
Set-Cookie: a=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT
Set-Cookie: c=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT
Set-Cookie: a=test2-a; Path=/; Expires=Thu, 16 Jan 2020 10:01:51 GMT; HttpOnly; SameSite=None
Set-Cookie: b=test2-b; Path=/; Expires=Thu, 16 Jan 2020 10:01:51 GMT; HttpOnly; SameSite=None
Set-Cookie: c=test2-c; Path=/; SameSite=None
```

### Test case 2

In the test "request test/1, then test/3" no cookies are deleted, only re-set and works as expected from the following header:

```
Set-Cookie: a=test3-a; Path=/; Expires=Thu, 16 Jan 2020 11:13:02 GMT; HttpOnly; SameSite=None
Set-Cookie: b=test3-b; Path=/; Expires=Thu, 16 Jan 2020 11:13:02 GMT; HttpOnly; SameSite=None
Set-Cookie: c=test3-c; Path=/; SameSite=None
```