/*
* Copyright (C) 2021  Aravinth Manivannan <realaravinth@batsense.net>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

use actix_web::{get, HttpResponse, Responder};
use sailfish::TemplateOnce;

#[derive(Clone, TemplateOnce)]
#[template(path = "auth/login/index.html")]
struct IndexPage {
    name: String,
    title: String,
}

impl Default for IndexPage {
    fn default() -> Self {
        IndexPage {
            name: "mCaptcha".into(),
            title: "Login".into(),
        }
    }
}

impl IndexPage {
    pub fn run(&self) -> Result<String, &'static str> {
        let index = self.clone().render_once().unwrap();
        Ok(index)
    }
}

#[get("/")]
pub async fn login() -> impl Responder {
    let body = IndexPage::default().run().unwrap();
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(body)
}
