---
title: Introduction
author: Lester Bolotaolo
---
# The Investment Programming and Management System

## Rationale

In general, the problem with performing Public Investment Program (PIP) formulation and updating is the poor, if not lack, of data management. 

The basic question is how to develop a system that will provide a comprehensive Investment Programming and Management for the Investment Programming Division that would enhance the current system, manage the resources efficiently, and generate more pertinent and statistical reports that would help the management in decision-making.

**Background**

Previously, the IPD uses Google Sheets to create PIP Data Entry System (DES) as the means to collect, review and store data on programs and projects of operating units of the DA. The DES is organized as follows:

1.	Each operating unit has its own folder.
2.	Each folder has several spreadsheets divided into programs (banner and regular), and projects (pipeline and ongoing).
3.	Each banner program spreadsheet is further subdivided into subprograms (MFOs) while regular program is subdivided into GASS, STO and Operations. This is to support the collection of activity level PAPs.
4.	Each worksheet within a spreadsheet contains more than 200 columns each representing a data field in the PIPOL System of the NEDA. While not all data fields are required, we used the same set of data fields for every PAP.
5.	Each row in the worksheet represents one activity within the program and one project if it is a project.
6.	To consolidate all the data coming from individual spreadsheets, the data is extracted using a script and stored in several Summary Sheets.

There are more than 2000 individual worksheets that need to be monitored and reviewed. 

From the client's point of view: one of the problems frequently reported is poor (or even lack of, in the case of Region 12) internet connection which makes it difficult for some OUs to use the PIP DES. Some OUs resort to downloading the Spreadsheets and uploading them once they are done. However, this introduced new problems as copy-pasting data overwrites hidden columns resulting in the consolidation script breaking. This can only be tracked if the data in the consolidation sheets show invalid data (#N/A); otherwise, the error is just overlooked/untracked. This process takes most of the time of the staff, leaving very little time for actual technical review. 

From the IPD's POV: Maintaining the PIP-DES was a nightmare. As the NEDA data requirement changed over time, so did the PIP-DES which meant editing 2000+ worksheets. With the introduction of regional breakdown for projects, the PIP-DES eventually had to be abandoned since there was no way to present data in a one-to-many relationship manner.

The other less obvious problem is data security. The files are being protected by whitelisting official Gmail accounts of agencies and this is manually done per folder/sheet. (This process cannot be automated.) Sometimes, the staff forgets to lock their worksheets from editing, resulting in changing of the data past the deadline. This has caused inconsistencies in the past making it difficult to track where they came from and even if they do, it is difficult to undo the changes.

The PIP-DES was a good solution at the beginning; however, it could be improved.

In 2019, the IPD introduced a form-based approach to updating the investment programming with the completion of the Harmonization Manuals. The form was based on the Budget Preparation (BP) Form 202 with additional data to cover the data requirements of the NEDA. This was an attempt to link investment programming with budget preparation with the assumption that the PIP Form can be used to prepare the BP 202. The IPD also introduced other forms such as the Form 2 or the rating form, Form 3 or the ranking form, and Form 4 or the investment program form. This was an attempt to guide operating units to do investment programming by evaluating and prioritizing their programs and projects. The time constraint (one month) was probably the biggest bottleneck and the sudden change in tool also resulted in misunderstanding esp. for those who were not able to attend the orientation. Some just chose to stick with the old PIP-DES.

The other problem is how to store the data collected from the forms. Since these are individual files in Excel, they will have to be encoded in a consolidated Excel file. The PIP Form 4 was supposed to address this making the forms easy to consolidate; however, the OUs did not follow instructions on how to fill it out rendering most of them useless.

The first question probably is Why not rely on NEDA’s PIP Online (PIPOL) System?

In 2016, the NEDA PIP Secretariat introduced the PIP Online System (also known as PIPOL) to serve as the official means to submit PAPs to the PIP. From the point of view of the NEDA PIP Secretariat, the automation really helped given that the previous PIP were submitted in several forms that were difficult to read and process. However, it introduced some problems for the endusers:

1.	Only official PIP focal persons can access the PIPOL System and most of the time, these are only for the Central Offices. The DA has more than 50 offices contributing and submitting their PIP. The staff who can usually participate full-time to the PIP formulation/updating are 5-6.
2.	The NEDA did not provide a physical form that agencies can use. While the web-based form is presented as a one-pager, this was not the case when translated into physical forms. Further, the agencies must come up with their own ways to collect data.
3.	The PIPOL System does not have an export data functionality. You must request data from PIP Secretariat which in turn they will request from the ICT Office. This could take days to do and they do not provide all the data DA submitted (usually limited only to title, PAP type, description, investment requirements per year, status).
4.	The PIPOL System is inaccessible once PIP formulation and updating period is over.
5.	Data migration has failed in the past. As a resut, some data were missing or even sometimes PAPs.
6.	The PIPOL System will not adjust to the needs of the agencies. The PIPOL System, contrary to its name (PIPOL), belongs to NEDA and is therefore designed for the use of the NEDA. The IPD wanted to structure its PIP such that it would show how much of the PAP is allocated for each agency (for example, how much of the Rice Program is allocated to a bureau or regional field office).
7.	The PIPOL System is mainly designed to collect, process and store projects. At the beginning, the IPD struggled with the NEDA PIP Secretariat to accept submission of programs since bulk of the PIP of the DA is allocated to programs. It took some time before the NEDA agreed and accepted the proposal. However, the project-centric form was retained.
8.	The PIPOL System itself was problematic. When the updating began last year, loading the page took almost five minutes. It took a while before they were able to fix it. Sometimes, creating and updating projects fail to be saved; forcing the staff to re-enter what they already encoded.

With these challenges in mind, what problems do the IPMS intend to address?	

The center of the IPMS is the Project Management Feature. The project management feature will cover:

1. Creation of PAP;
2. Editing/Updating of PAP;
3. Deletion of PAP;
4. Viewing of PAP/s;
5. Review of PAP/s;

## About

VuePress is composed of two parts: a [minimalistic static site generator](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core) with a Vue-powered [theming system](https://v1.vuepress.vuejs.org/theme/) and [Plugin API](https://v1.vuepress.vuejs.org/plugin/), and a [default theme](https://v1.vuepress.vuejs.org/theme/default-theme-config.html) optimized for writing technical documentation. It was created to support the documentation needs of Vue's own sub projects.

Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.
