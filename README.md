# just heads up how to run it

## commands

- `kubectl apply -f k8s/ ` | ** this will apply the manifests (secrets included) **
- `kubectl get secret app-secrets -o yaml` | ** check secrets **
- `minikube service tms-app-service --url` | ** i used minikube, this will give you the url **

## what you can check

- `${your url}/api/v1/todos/test` — Returns a test todo.
- `${your url}/api/v1/users/test` — Returns a test user.

For the frontend: the home page (`/`) will redirect you to `/basic-tables` where you can create a user and todos.
