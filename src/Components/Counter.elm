module Components.Counter exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , update = update
        , view = view
        }



-- INIT


type alias Model =
    { count : Int
    }


init : Model
init =
    { count = 0
    }



-- UPDATE


type Msg
    = Increment


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }



-- VIEW


view : Model -> Html Msg
view model =
    div [ class "card" ]
        [ button [ onClick Increment ]
            [ text ("Elm count is " ++ String.fromInt model.count)
            ]
        , p []
            [ text "Edit "
            , code [] [ text "src/Components/Counter.elm" ]
            , text " and save to test HMR"
            ]
        ]
