#!/bin/sh

# Enter current cohort
cohort="kotare-2022"

# Repos you want to clone (make sure you match the name listed on eda-challenges)
repos=("kata-data-structures" "kata-objects-and-arrays" "kata-strings-numbers-modules" "kata-types-modules")
# TODO: take repos from args rather than array

function clone_repos {
    echo "Starting script\n"

    for repo in "${repos[@]}"; do
        clone_and_push
    done

    echo "Done :)"
}

function clone_and_push {

    eda_org="git@github.com:dev-academy-solutions"

    echo "Copying repo $repo - $eda_org/$repo.git\n"

    # if remote exists, otherwise
    ( 
        git ls-remote $eda_org/$repo.git -q 
    ) && ( 
        git clone $eda_org/$repo.git
        cd $repo

        echo "\nCopying solution"

        git checkout solution
        git push git@github.com:$cohort/$repo.git solution

        cd ..
        rm -rf $repo
    ) || (
        echo "No such repo $eda_org/$repo.git"
    )
}

clone_repos 
