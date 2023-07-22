
```sh
  # from my shell
  echo 'paste the public key here' | ssh -t ubuntu@devacademy.nz sudo dokku ssh-keys:add the-computers-name
  # within dokku
  echo 'paste the public key here' | sudo dokku ssh-keys:add cohort-name

  # accessing ubuntu
  ssh ubuntu@devacademy.nz

  echo ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJdUENu+sTwySo+e0PAQjGFzzIX8vGX8w/9OLAM6ifZk tools@devacademy.nz | sudo dokku ssh-keys:add poneke-campus

  # keys
  sudo dokku ssh-keys:remove
  sudo dokku ssh-keys:list
  dokku ssh-keys:list | grep hihi22

  # apps
  dokku apps:list | grep pup
  dokku --quiet apps:list | wc -l

  # deleting stuff
  dokku postgres:unlink database-name app-name
  dokku postgres:destroy app-name
  dokku apps:destroy app-name
```
