# Basic Environment Writer for Kubernetes

A simple container that will echo the contents of an environment variable. 

Handy for testing routes and things on a Kubernetes Cluster.

## What is it?

This is a Docker image called `jakkaj/basic-env-write` that takes an environment var called `ECHOENV`. It sets up a node.js based Express server and echoes back the value of the environment variable. It also echoes back all the other environment variables available to the container as header variables. 

## Usage

Switch to the `kube` directory. 

```
kubectl apply -f svc.yaml
kubectl apply -f single.yaml
kubectl apply -f mutli.yaml
```

Find the svc and copy the public IP address. Search for a service called `echoer`. 

```
kubectl get svc
```

Navigate to the service to see the pods. 

Next steps are to set up some routes with something like [Istio](https://istio.io/docs/setup/kubernetes/quick-start.html) to create rules to route to the pods based on labels. 
