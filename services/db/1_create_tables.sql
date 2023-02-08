create table if not exists public.rockets
(
    id   uuid default gen_random_uuid() not null
        constraint rockets_pk
            primary key,
    name varchar                        not null,
    year integer                        not null
);

alter table public.rockets
    owner to postgres;