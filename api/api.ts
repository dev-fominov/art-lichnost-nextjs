import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://alex-volkov.ru/wp-json/art/v1/',
    withCredentials: true,
})


export const pageAPI = {
    team() {
        return instance.get(`page/team`).then(res => res.data)
    },
    psychologist() {
        return instance.get(`page/psychologist`).then(res => res.data)
    },
    merch() {
        return instance.get(`page/merch`).then(res => res.data)
    },
    home() {
        return instance.get(`page/home`).then(res => res.data)
    },
    contacts() {
        return instance.get(`page/contacts`).then(res => res.data)
    },
    about() {
        return instance.get(`page/about`).then(res => res.data)
    },
    vacancies() {
        return instance.get(`page/vacancies`).then(res => res.data)
    },
    job(job: string) {
        return instance.get(`page/vacancies/${job}`).then(res => res.data)
    },
    projects() {
        return instance.get(`page/projects`).then(res => res.data)
    },
    project(project: string) {
        return instance.get(`page/projects/${project}`).then(res => res.data)
    },
    proftestirovanie() {
        return instance.get(`page/proftestirovanie`).then(res => res.data)
    },
    onlineTest() {
        return instance.get(`page/online-test`).then(res => res.data)
    },
    offlineTest() {
        return instance.get(`page/offline-test`).then(res => res.data)
    },
    slug(slug: string) {
        return instance.get(`page/${slug}`).then(res => res.data)
    },
    contract(slug: string) {
        return instance.get(`page/contract/${slug}`).then(res => res.data)
    },
    courses() {
        return instance.get(`page/courses`).then(res => res.data)
    },
    course(course: string) {
        return instance.get(`page/courses/${course}`).then(res => res.data)
    },
    camp() {
        return instance.get(`page/camp`).then(res => res.data)
    },
    touristHolidays() {
        return instance.get(`page/tourist-holidays`).then(res => res.data)
    },
    skills() {
        return instance.get(`page/skills`).then(res => res.data)
    },
    professions() {
        return instance.get(`page/professions`).then(res => res.data)
    },
    smena(smena: string) {
        return instance.get(`page/camp/${smena}`).then(res => res.data)
    },
    docs(docs: string) {
        return instance.get(`page/docs/${docs}`).then(res => res.data)
    },
    blogs() {
        return instance.get(`page/blogs`).then(res => res.data)
    },
    post(post: string) {
        return instance.get(`page/blogs/${post}`).then(res => res.data)
    },
}

export const filterAPI = {
    camp(certificate: any, age: any, section: any, period: any) {
        return instance.get(`camp/filter?certificate=${certificate}&age=${age}&section=${section}&period=${period}`).then(res => res.data)
    },
    courses(category: any, age: any, presenter: any) {
        return instance.get(`courses/filter?course=${category}&age=${age}&presenter=${presenter}`).then(res => res.data)
    },
}

export const appAPI = {
    commonForm(body: any) {
        return instance.post(`send-mail/`, body).then(res => res.data)
    },
    smena(id_page: any, slug: any) {
        return instance.get(`camp-changes/?camp=${id_page === 10
            ? 'professions'
            : id_page === 11
                ? 'skills'
                : 'tourist-holidays'}&slug=${slug}`).then(res => res.data)
    },
}