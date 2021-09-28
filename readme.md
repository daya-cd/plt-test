# PLT React-Native Mobile App ( iOS)

## Running the app locally

```console
npm install
```

Then use the following commands to run iOS or Android:

```console
npm run ios
```
---

## Troubleshooting

* Clean ios build:

    ```console
    cd ios
    rm -rf build/
    pod install
    ```

    or

    ```console
    pod update
    ```

## Uncovered requirements
* http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024 First product image is not loaded (Assume it is corrupted).
* Less unit test coverage.
