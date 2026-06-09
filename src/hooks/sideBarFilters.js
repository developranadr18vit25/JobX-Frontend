
export const filterJobType = (value,navigate,location) => {

    const params = new URLSearchParams(location.search);

    if (value) {
        params.set("JobType", value);
    }
    else {
        params.delete("JobType");
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    navigate(newUrl);

}

export const filterExperience = (minExp, maxExp,navigate,location) => {

    const params = new URLSearchParams(location.search);

    params.set("minExp", minExp);
    params.set("maxExp", maxExp);

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    navigate(newUrl);

}

export const filterSalary = (minSalary, maxSalary,navigate,location) => {

    const params = new URLSearchParams(location.search);

    params.set("minSalary", minSalary);
    params.set("maxSalary", maxSalary);

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    navigate(newUrl);

}

export const filterSkills = (skill, value,navigate,location) => {

    const params = new URLSearchParams(location.search);

    if (value) {
        params.append("skills", skill);
    }
    else {
        params.delete("skills", skill)
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    navigate(newUrl);

}

