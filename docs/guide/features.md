---
title: Features
author: Lester Bolotaolo
tags:
  - features
  - open source
  - good documentation
  - lightweight
  - responsive
---

# Features

[[TOC]]

## Project Management

The key feature of the IPMS is the project management module which allows users to create, update, delete and submit their programs and projects to the PIP. Unlike previously, IPMS offers a single place to store all programs and projects in contrast with the PIP-DES which stores PAPs in separate sheets. It is now stored in a relational database making it easier to go back to the data, create backups, etc. Being relational, it also becomes easier to generate reports.

In addition, IPMS makes it easier to track and monitor progress of the PAP (e.g. if it is still draft, endorsed, finalized, encoded, etc.). These are processes not tracked before.

In the IPMS, we tried to separate encoding and review. Encoding will focus on providing the key features of a program/project. Review, on the other hand, will focus on assessing PAPs in terms of its eligibility for PIP inclusion.

In the works: the vision of the IPD is to integrate `automated prioritization` in the IPMS. More on [future plans](/guide/future-plans)

## Good Documentation

What makes applications last is good documentation.

We tried our best to document the IPMS in detail. The documentation includes the backend API making it possible to create apps that can use it. It also ensures that the application is easily extendable. For example, you can create an application that processes data from the backend to generate awesome reports.

## Open-Source

What is open-source? Simply put, they're free! The IPMS is built with [Laravel](https://laravel.com/) on the backend and [Quasar Framework](https://quasar.dev/) on the frontend. These extensively and greatly documented web development frameworks are easy-to-learn and easy-to-use. They're also constantly updated with security fixes and new features. Since they're open-source, they're also really popular in the development community and therefore, it is easy to find people to continue the project. You can also engage a team to work on it.

## Lightweight

The entire application is very small. It's less than 5MB. On top of that, it's cached! This means you'll need less mobile/wi-fi data to use it.

## Single Page Application

No refreshes. That was a lie though. It will refresh once after login. We won't tell you the reason though.

## Responsive

Responsive means the app looks good in a wide range of devices (smartphones, tablets, laptop, desktop, etc.). This means whatever device you use, you'll be able to use it without much problem. If it doesn't work as expected, let us know so we can fix the problem.